import express from 'express';
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
app.get('/', async (req, res) => {
    const html = await ejs.renderFile(__dirname + '/views/emails/welcome.ejs', { name: "Akshay Pathak" });
    // await sendEmail("akshay.formfees@gmail.com", "Test SMTP", html);
    await emailQueue.add(emailQueueName, { to: "akshay.formfees@gmail.com", subject: "Test SMTP", body: html });
    return res.json({ message: "Email Sent Successfully" });
});
// Queues
import './jobs/index.js';
import { emailQueue, emailQueueName } from './jobs/EmailJob.js';
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
