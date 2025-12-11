export const mapCountryDetails = (() => {
  const init = () => {
    const countryElements = document.querySelectorAll('[data-template]');
    const countryTextElements = document.querySelectorAll('[data-country-map]');
    const detailPanel = document.querySelector('.where-we-operate__detail');
    const detailTitle = document.querySelector('.where-we-operate__detail-title span');
    
    if (!detailPanel) {
      return;
    }

    countryElements.forEach(countryElement => {
      countryElement.addEventListener('click', (event) => {
        event.preventDefault();
        
        const countryId = countryElement.id;
        handleCountryClick(countryId, detailPanel, detailTitle);
      });
    });

    countryTextElements.forEach(textElement => {
      textElement.addEventListener('click', (event) => {
        event.preventDefault();
        
        const countryId = textElement.getAttribute('data-country-map');
        handleCountryClick(countryId, detailPanel, detailTitle);
      });
    });

    const closeButton = document.querySelector('.where-we-operate__detail-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        detailPanel.style.display = 'none';
        const mapTitle = document.querySelector('.where-we-operate__title');
        const mapInfo = document.querySelector('.where-we-operate__text');

        mapTitle.style.opacity = '1';
        mapInfo.style.opacity = '1';
      });
    }
  };

  const handleCountryClick = (countryId, detailPanel, detailTitle) => {
    const countryDetailId = `${countryId}-detail`;
    const mapTitle = document.querySelector('.where-we-operate__title');
    const mapInfo = document.querySelector('.where-we-operate__text');

    const countryName = getCountryDisplayName(countryId);
    if (detailTitle) {
      detailTitle.textContent = countryName;
    }
    
    updateFlagImage(countryId, countryName);
    
    updateTabContent(countryId, countryDetailId);
    
    detailPanel.style.display = 'flex';
    mapTitle.style.opacity = '0';
    mapInfo.style.opacity = '0';
    
    resetToFirstTab();
  };

  const resetToFirstTab = () => {
    const tabButtons = document.querySelectorAll('[data-tabs="tabs-map"] button');
    const tabContents = document.querySelectorAll('[data-tabs-content="tabs-map"] > [data-tab-content]');
    
    tabButtons.forEach((button, index) => {
      if (index === 0) {
        button.classList.add('is-active');
      } else {
        button.classList.remove('is-active');
      }
    });
    
    tabContents.forEach((content, index) => {
      if (index === 0) {
        content.classList.add('is-active');
        content.classList.remove('visually-hidden');
      } else {
        content.classList.remove('is-active');
        content.classList.add('visually-hidden');
      }
    });
  };

  const getCountryDisplayName = (countryId) => {
    const countryDataDiv = document.querySelector(`#${countryId}`);
    if (countryDataDiv) {
      const dataName = countryDataDiv.getAttribute('data-name');
      if (dataName) {
        return dataName;
      }
      const countryNameElement = countryDataDiv.querySelector('b');
      return countryNameElement ? countryNameElement.textContent : countryId;
    }
    return countryId;
  };

  const getCountryFlagFilename = (countryId) => {
    const countryDataDiv = document.querySelector(`#${countryId}`);
    if (countryDataDiv) {
      const dataFlag = countryDataDiv.getAttribute('data-flag');
      if (dataFlag) {
        return dataFlag;
      }
    }
    return countryId;
  };

  const updateFlagImage = (countryId, countryName) => {
    const flagElement = document.querySelector('.where-we-operate__detail-flag');
    if (flagElement && countryId) {
      const flagFilename = getCountryFlagFilename(countryId);
      
      let flagSrc;
      if (flagFilename.includes('/') || flagFilename.endsWith('.svg')) {
        flagSrc = flagFilename;
      } else {
        flagSrc = `images/${flagFilename}.svg`;
      }
      
      flagElement.src = flagSrc;
      
      flagElement.style.display = 'block';
    }
  };

  const updateTabContent = (countryId, countryDetailId) => {
    const countryData = document.querySelector(`#${countryId}`);
    const countryDetailData = document.querySelector(`#${countryDetailId}`);
    
    const tabContent1 = document.querySelector('[data-tab-content="map1"]');
    const tabContent2 = document.querySelector('[data-tab-content="map2"]');
    const tabContent3 = document.querySelector('[data-tab-content="map3"]');
    const tabContent4 = document.querySelector('[data-tab-content="map4"]');

    if (!tabContent1 || !countryData) {
      return;
    }

    const countryList = countryData.querySelector('ul');
    if (countryList) {
      const listItems = countryList.querySelectorAll('li');
      const formattedList = document.createElement('ul');
      
      listItems.forEach(item => {
        const li = document.createElement('li');
        const text = item.textContent;
        
        const colonIndex = text.indexOf(':');
        if (colonIndex > -1) {
          const label = text.substring(0, colonIndex + 1).trim();
          const value = text.substring(colonIndex + 1).trim();
          
          const labelSpan = document.createElement('span');
          labelSpan.textContent = label + ' ';
          
          const valueSpan = document.createElement('span');
          valueSpan.textContent = value;
          
          li.appendChild(labelSpan);
          li.appendChild(valueSpan);
        } else {
          li.textContent = text;
        }
        
        formattedList.appendChild(li);
      });
      
      tabContent1.innerHTML = '';
      tabContent1.appendChild(formattedList);
    }

    if (countryDetailData) {
      const legalData = countryDetailData.querySelector('div:nth-child(2)');
      if (legalData && tabContent2) {
        tabContent2.innerHTML = legalData.innerHTML;
      } else if (tabContent2) {
        tabContent2.innerHTML = '<p></p>';
      }

      const nonpayData = countryDetailData.querySelector('div:nth-child(3)');
      if (nonpayData && tabContent3) {
        tabContent3.innerHTML = nonpayData.innerHTML;
      } else if (tabContent3) {
        tabContent3.innerHTML = '<p></p>';
      }

      const currencyData = countryDetailData.querySelector('div:nth-child(4)');
      if (currencyData && tabContent4) {
        tabContent4.innerHTML = currencyData.innerHTML;
      } else if (tabContent4) {
        tabContent4.innerHTML = '<p></p>';
      }
    } else {
      if (tabContent2) {
        tabContent2.innerHTML = '<p></p>';
      }
      if (tabContent3) {
        tabContent3.innerHTML = '<p></p>';
      }
      if (tabContent4) {
        tabContent4.innerHTML = '<p></p>';
      }
    }
  };

  return {
    init,
  };
})();