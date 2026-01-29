// Vercel Serverless Function - submits to Monday.com board
// Required env vars: MONDAY_API_KEY, MONDAY_BOARD_ID

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { needs, name, email, phone, businessName, businessRole, discovery } = req.body;

  // Validate required fields
  if (!needs || !name || !email || !phone || !businessName || !businessRole || !discovery) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.MONDAY_API_KEY;
  const boardId = process.env.MONDAY_BOARD_ID;

  if (!apiKey || !boardId) {
    console.error('Missing MONDAY_API_KEY or MONDAY_BOARD_ID environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Build column values for Monday
  // Note: Column IDs must match your Monday board. Update these to match your actual column IDs.
  const columnValues = JSON.stringify({
    // Text columns
    text: name, // Name column (usually the item name)
    email: { email, text: email },
    phone: { phone, countryShortName: 'US' },
    text0: businessName, // Adjust column ID as needed
    text1: businessRole, // Adjust column ID as needed
    long_text: { text: needs },
    status: { label: discovery }, // Or use dropdown column ID
  });

  const mutation = `
    mutation {
      create_item (
        board_id: ${boardId},
        item_name: "${name.replace(/"/g, '\\"')}",
        column_values: ${JSON.stringify(columnValues)}
      ) {
        id
      }
    }
  `;

  try {
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
        'API-Version': '2024-01',
      },
      body: JSON.stringify({ query: mutation }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Monday API errors:', data.errors);
      return res.status(500).json({ error: 'Failed to submit to Monday', details: data.errors });
    }

    return res.status(200).json({ success: true, itemId: data.data?.create_item?.id });
  } catch (error) {
    console.error('Monday API error:', error);
    return res.status(500).json({ error: 'Failed to submit form' });
  }
}
