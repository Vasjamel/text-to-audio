import say from "say";
import textToSp from './text.js'
const fileName = 'output.wav';

function textToSpeech({ text = textToSp, fileName = fileName }) {
    say.export(text, 'Microsoft David Desktop - English (United States)', 0, fileName, (err) => {
        if (err) {
            return console.error(err);
        }
    });
}

textToSpeech({ textToSp, fileName });
