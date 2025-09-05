
// import '@n8n/chat/style.css';

import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
const init = () =>{

    https://internal-hideously-newt.ngrok-free.app/webhook/c4180219-4863-4357-8a2d-74b723580cbe/chat
    createChat({
	webhookUrl:" https://internal-hideously-newt.ngrok-free.app/webhook/c4180219-4863-4357-8a2d-74b723580cbe/chat",
	webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		` שלום עליך אני רוח ישעיהו `,
		`מה תרצה לדעת`
	],
	i18n: {
		en: {
			title: 'ברוך הבא בשם ד',
			subtitle: "שאל שאלתך למען דעת יראת אלוקים",
			footer: '',
			getStarted: 'New Conversation',
			inputPlaceholder: 'שאל שאלתך בני',
		},
	},
	enableStreaming: false,
});
}

init();
