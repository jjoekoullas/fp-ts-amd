//don't import/export from this file or you'll have a bad time.

requirejs.config({
    paths: {
        'fp-ts': 'node_modules/fp-ts'
    }
});

//kickoff the application
requirejs(['main'], () => {})