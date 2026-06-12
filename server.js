import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, system } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-ant-api03-AQ.Ab8RN6IPg7mp7f9HEVTdgoWbqHqw85UtEmX5sE4BntFxCEW7RA',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system,
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    res.json(data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch response',
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
});
