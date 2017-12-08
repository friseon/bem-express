block('body')(
    tag()('main'),
    content()(function() {
        return {
            block: this.data.view
        };
    })
);
