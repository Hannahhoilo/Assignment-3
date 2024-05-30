# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
--------------------------------------------------------

I made this project using React Vite. Here you can fill in your expenses in the form, and what kind of expenses they are. 

You have to fill in the title and amount fields. An error message pops up if you don’t fill out these fields.

In the phone number field you can only write numbers. If you write anything else than number you get an error message and you are prevented to submit the expense until you change this.

In the message field you can only write 80 characters, and the counter is stopping you from writing more than this.