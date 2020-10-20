const demo = {
    info: {
        name: 'jack'
    },
    get name() {
        return this.info.name;
    },
    set name(val) {
        this.info.name = val;
    }
}

demo.name = 'lucy';
console.log('name:', demo.name)