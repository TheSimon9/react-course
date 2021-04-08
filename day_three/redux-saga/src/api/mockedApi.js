let mockList = {
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

localStorage.setItem('list', JSON.stringify(mockList))

export async function doGet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(JSON.parse(localStorage.getItem('list'))), 1000)
    })
}

export async function doPost(item) {
    return new Promise((resolve, reject) => {
        const mockList = JSON.parse(localStorage.getItem('list'))
        if (Object.values(mockList.lista).some(i => i.value === item.value)) {
            reject(new Error('Item already exists'))
        } else {
            mockList.lista.push(item)
            localStorage.setItem('list', JSON.stringify(mockList))
            setTimeout(() => resolve(item), 1000)
        }
    })
}