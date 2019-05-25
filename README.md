TechJDI.

Run: npm start.

short eyes: front end write using react.js, data control by redux.
Detail:
    + in service: i implement axios to request to server to get data from API, i write func: get, post , put for reuse.
    + in redux: i create 3 folder: actions, reducers, store.
        - store save state as a singleton for all app.
        - reducers: i switch action.type and return state corresponding.
        - actions: i write all action for reuse in view, mean from UI component, i can dispatch this action.
    + also, i write alittle bit constance, funcHelp in lib folder.

working flow:
    + open localhost:3000, see on Nav header, click on button create post, then you see form post topic, please post some topic .
    + after that, please click on Nav header on button: list topic to see all list topic, from here you can upvote and downvote for each topic.
    + you can sort topic via vote descending or ascending