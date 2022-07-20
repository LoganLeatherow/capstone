const form = document.querySelector('#resin-form')
const materialDescription = document.querySelector('#material-description')
const lotNumber = document.querySelector('#lot-number')
const button = document.querySelector('#button')
const resinList = document.querySelector('#resin-list')


function handleSubmit(e) {
    e.preventDefault()

    if (materialDescription.value < 1) {
        alert ('You must enter a resin type')
        return
    }

    if (lotNumber.value < 1){
        alert ('You must enter a lot number')
        return
    }

    let body = { 
        materialDescription: materialDescription.value, 
        lotNumber: lotNumber.value
    }

    let siloOne = () => {
        axios.post('http://localhost:5000/siloOne', body)
        .then(() =>{
            console.log('addToSiloOne complete')
            window.location.reload();
        })
    }
    siloOne()
}


    let getResin = () =>{
        resinList.innerHTML = ''

        axios.get('http://localhost:5000/resin')
        .then(res => {
            res.data.forEach(elem =>{
                const resinCard = document.createElement('div')
                resinCard.className ="resin-card"
                resinCard.innerHTML = (`
                <h2>${elem.silo_one_id}</h2><h2>${elem.material_description}</h2><h2>${elem.lot_number}</h2>`)
                resinList.appendChild(resinCard)
            })
        })
    }

    getResin()

button.addEventListener("click", handleSubmit)
button.addEventListener("click", () =>{ console.log('button clicked')})





    // function deleteResin(id){
    //     axios.deleteResin(`http://localhost:5000/${id}/`)
    //     .then(() => getResin())
    //     .catch(err=>console.log(err))
    // }

