export function doGet() {
    setTimeout(() => {
        return {
            lista: [
                {
                    id: 1,
                    value: "birra"
                },
                {
                    id: 2,
                    value: "patatine"
                }, {
                    id: 3,
                    value: "spritz"
                }
            ]
        }
    }, 1000)
}