require('dotenv').config();
const express = require('express');
const path = require('path');
const OpenAI = require('openai').default;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// POST /api/chat — proxy requests to OpenAI
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'A message string is required.' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: 'OpenAI API key is not configured. Add OPENAI_API_KEY to your .env file.',
    });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant specializing in TikTok content creation and monetization strategies for creators who prefer not to show their face. Provide practical, actionable advice.',
        },
        { role: 'user', content: message },
      ],
      max_tokens: 800,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('OpenAI error:', err.message);
    res.status(502).json({ error: 'Failed to get a response from OpenAI. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
