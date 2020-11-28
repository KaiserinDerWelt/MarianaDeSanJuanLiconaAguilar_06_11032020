const profileImage = document.getElementById('profileImage')
const nameDisplay = document.querySelector('.monoId')
const nameModalDisplay = document.querySelector('.headerModal__name')
const locationDisplay = document.querySelector('.monoLocation')
const descriptionDisplay = document.querySelector('.monoDescription')
const tagsDisplay = document.querySelector('.monotags')
const photosContainer = document.querySelector('.containerColumnsPicture')
const sildesContainer = document.querySelector('.modal-content')
const priceDisplay = document.querySelector('.columnRate')
const likesDisplay = document.querySelector('.displayLikes')

const photographer = db['photographers'].find(x => x.id === photographerId)
const photos = db['media'].filter(el => (el.photographerId === photographerId && el.image))

profileImage.src = 'img/ID/' + photographer.portrait
nameDisplay.innerHTML = photographer.name
nameModalDisplay.innerHTML = photographer.name
locationDisplay.innerHTML = photographer.city + ', ' + photographer.country
descriptionDisplay.innerHTML = photographer.alt
priceDisplay.innerHTML = photographer.price + '$'

let likes = 0
for(let i = 0; i < photos.length; i++) {
    likes += photos[i].likes
}

likesDisplay.innerHTML = likes

for(let i = 0; i < photographer.tags.length; i++) {
    const newTag = document.createElement('p')
    newTag.innerHTML = '#' + photographer.tags[i]
    newTag.classList.add('hashTagPro')
    tagsDisplay.appendChild(newTag)
}



function renderPhotos(photosArray) {
    for(let i = 0; i < photosArray.length; i++) {
            photosContainer.innerHTML += `<div class="cardDisplay">
                                            <a href="#">
                                                <img src="${photosFolder}/${photosArray[i].image}" alt=""  class="squarePicture" onclick="currentSlide(${i + 1})" id="test" data-lightbox="lightboxImage" aria-hidden="true">
                                            </a>
                                            <div class="carrouselDescription">
                                                <div class="colName">${photosArray[i].alt}</div>
                                                <div class="colPrice">${photosArray[i].price}$</div>
                                                <div class="colLike">${photosArray[i].likes} <i class="fas fa-heart" aria-hidden="true"></i></div>
                                            </div>
                                        </div>`

            sildesContainer.innerHTML += `<div class="mySlides">
                                            <img src="${photosFolder}/${photosArray[i].image}"  class="imgShow">
                                            <div class="caption-container">
                                            <p class="caption">${photosArray[i].alt}</p>
                                            </div>
                                        </div>`
            
    }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const modalControllers = `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>`

function orderByPopularity() {
    photosContainer.innerHTML = ''
    sildesContainer.innerHTML = modalControllers
    renderPhotos(photos.sort(dynamicSort("-likes")))
}

function orderByDate() {
    photosContainer.innerHTML = ''
    sildesContainer.innerHTML = modalControllers
    renderPhotos(photos.sort(dynamicSort("-date")))
}

function orderByTitle() {
    photosContainer.innerHTML = ''
    sildesContainer.innerHTML = modalControllers
    renderPhotos(photos.sort(dynamicSort("alt")))
}

function changeOrder(choice) {
    if(choice === 'Title') {
        orderByTitle()
    } else if(choice === 'Date') {
        orderByDate()
    } else {
        orderByPopularity()
    }

}

orderByPopularity()