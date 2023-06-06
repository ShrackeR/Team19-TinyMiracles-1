from flask import Flask, request, jsonify,render_template
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = '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'


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')
@app.route('/prompt', methods=['POST'])
def generate_response():
    # Get the prompt string from the request
    data = request.json
    prompt = data['prompt']

    # Generate a response using OpenAI API
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.7,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    # Extract the generated response from OpenAI API response
    generated_text = response.choices[0].text.strip()

    # Return the response as JSON
    return jsonify({'response': generated_text})

if __name__ == '__main__':
    app.run()
