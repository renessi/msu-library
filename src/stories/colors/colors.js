import './colors.scss';


// Получаем массив цветов от кастомных переменных
function getCSSCustomProperties(regex) {
let customProperties = {};


let styleSheets = document.styleSheets;

for (let i = 0; i < styleSheets.length; i++) {
  try {
      let rules = styleSheets[i].cssRules || styleSheets[i].rules;
        for (let j = 0; j < rules.length; j++) {
            if (rules[j].selectorText === ':root') {
                let style = rules[j].style;
                  for (let k = 0; k < style.length; k++) {
                    let name = style[k];
                      if (regex.test(name)) {
                        customProperties[name] = style.getPropertyValue(name).trim();
                          }
                    }
                }
            }
        } catch (e) {
            console.error('Ошибка при доступе к стилям:', e);
        }
    }

    return customProperties;
}

let regex = /--clr-/

let customProperties = getCSSCustomProperties(regex);

// Создание палетки цветов
export const createColors = ({
...args
  }) => {
    const container = document.createElement('div');
    container.classList.add('main')
    const colorPallete = []
    const colorNames = Object.keys(customProperties).reverse()
    colorNames.map(n => {
      const value = customProperties[n]
      colorPallete.push(createColorCard(n, value))

    })
    
    colorPallete.map(e => container.prepend(e))
    
    return container;
  };

// Создание HTML разметки для карточки
const createColorCard = (n, value) => {
    const colorCard = document.createElement('div');
    const colorDrop = document.createElement('div');
    const colorCardText = document.createElement('div');
    const colorName = document.createElement('p');
    const colorDesc = document.createElement('p');
  
    colorCard.classList.add('card');
    colorDrop.classList.add('card__color')
    colorName.classList.add('card__name')
    colorDesc.classList.add('card__desc')
    colorCardText.classList.add('card__text')
    
    colorName.textContent = n;
    colorDesc.textContent = value
    colorDrop.style.backgroundColor = value;
    colorCardText.append(colorName)
    colorCardText.append(colorDesc)

    colorCard.prepend(colorDrop)
    colorCard.append(colorCardText)
    
    return colorCard
}



