'use strict';

var setupBlock = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupBlock.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
var setupUserName = setupBlock.querySelector('.setup-user-name');
var setupSubmit = setupBlock.querySelector('.setup-submit');
var setupPlayer = document.querySelector('.setup-player');
var colorCoat = setupPlayer.querySelector('.wizard-coat');
var colorEyes = setupPlayer.querySelector('.wizard-eyes');
var colorFireball = setupPlayer.querySelector('.setup-fireball-wrap');

var getRandomArbitary = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });

  setupSubmit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });
});

setupClose.addEventListener('click', closePopup);

setupIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
});


var NAMES_WIZARD = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES_WIZARD = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

colorCoat.addEventListener('click', function () {
  colorCoat.style.fill = COAT_COLOR[getRandomArbitary(1, 6)];
});

colorEyes.addEventListener('click', function () {
  colorEyes.style.fill = EYES_COLOR[getRandomArbitary(1, 5)];
});

colorFireball.addEventListener('click', function () {
  colorFireball.style.background = FIREBALL_COLOR[getRandomArbitary(1, 5)];
});

var person = function () {
  var persons = [];

  for (var i = 1; i <= 4; i++) {
    var obj = {
      name: NAMES_WIZARD[getRandomArbitary(1, 8)] + ' ' + SECOND_NAMES_WIZARD[getRandomArbitary(1, 8)],
      coatColor: COAT_COLOR[getRandomArbitary(1, 6)],
      eyesColor: EYES_COLOR[getRandomArbitary(1, 5)]
    };

    persons.push(obj);
  }

  return persons;
};

var wizardsArray = person();

var wizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').innerHTML = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i]));
}

var setupSimilarList = document.querySelector('.setup-similar-list');

setupSimilarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
