export function selectionSortMain(array) {
    let animations = []
    let auxArray = array.slice()

    selectionSort(auxArray, animations)
    array = auxArray;

    return [animations, array]
}

function selectionSort(auxArray, animations) {
    const max = auxArray.length

    for(let i = 0; i < max; i++) {
        let menor = i
        for(let aux = i+1; aux < max; aux++) {
            animations.push([aux, menor])
            animations.push([aux, menor])

            if(auxArray[aux] < auxArray[menor]) {
                // menor = aux
                animations.push([menor, auxArray[aux]])    
                animations.push([aux, auxArray[menor]])    
                swap(auxArray, menor, aux)
            } else {
                animations.push([-1, -1])
                animations.push([-1, -1])
                
            }
        }
    }
}

function swap(auxArray, firstIndex, secondIndex) {
    let temp = auxArray[firstIndex]
    auxArray[firstIndex] = auxArray[secondIndex]
    auxArray[secondIndex] = temp
}