block('page-index').content()(function() {
    const data = this.data;
    return `${data.hello}, ${data.world}`;
});
