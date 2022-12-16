export const messageStyles = ({ backgroundColor, borderColor, titleColor, descriptionColor, buttonColor, buttonTextColor }) => {
  return `
    <style id="messageStyles">
      inbox-message::part(messageWrapper) {
        margin-bottom: 16px; 
      }
      inbox-message::part(message) {
        background-color: ${backgroundColor}; 
        border: 1px solid ${borderColor};
        border-radius: 4px; 
        overflow: hidden;
      }
      inbox-message::part(iconTitleDescWrapper) {
        display: flex; 
        padding: 16px;
      }
      inbox-message::part(titleDescWrapper) {
        display: flex; 
        flex-direction: column;
      }
      inbox-message::part(iconImgContainer) {
        display: flex; 
        margin-right: 16px;
      }
      inbox-message::part(mainImg) {
        width: 100%; 
        background: #b2b1ae;
      }
      inbox-message::part(iconImg) {
        height: 40px; 
        width: 40px;
      }
      inbox-message::part(title) {
        font-size: 14px !important; 
        line-height: 20px; 
        font-weight: 600; 
        color: ${titleColor}
      }
      inbox-message::part(description) {
        font-size: 14px !important; 
        line-height: 20px; 
        font-weight: 400; 
        color: ${descriptionColor}
      }
      inbox-message::part(button) {
        background-color: ${buttonColor}; 
        color: ${buttonTextColor}; 
        padding: 8px 16px; 
        font-size: 12px; 
        line-height: 16px; 
        font-weight: 600; 
        flex: 1; 
        border-radius: 0px; 
        text-transform: capitalize; 
        cursor: pointer; 
        border: none;
      }
      inbox-message::part(buttonsContainer) {
        display: flex;
        position: relative;
      }
      inbox-message::part(snackbar) {
        position: absolute;
        top: calc(-100% - 12px);
        left: 50%;
        transform: translate(-50%, 0px);
        font-size: 14px;
        font-weight: 400;
        background: #FFFFFF;
        border: 1px solid #ECEDF2;
        box-shadow: 0px 4px 8px rgb(0 0 0 / 6%), 0px 0px 2px rgb(0 0 0 / 4%);
        border-radius: 4px;
        z-index: 2;
        display: none;
        width: max-content;
        align-items: center;
        padding: 8px 16px;
        justify-content: center;
      }

      inbox-message::part(snackbar-msg) {
        color: black;
        margin-left: 8px;
      }

      inbox-message::part(timeStamp) {
        display: flex; 
        justify-content: end; 
        align-items: center; 
        margin-top: 4px; 
        font-size: 12px !important; 
        line-height: 16px; 
        color: black;
      }
      inbox-message::part(unreadMarker) {
        height: 8px; 
        width: 8px; 
        border-radius: 50%; 
        background-color: #FFBA00; 
        margin-left: 8px;
      }
      @media only screen and (min-width: 420px) {
        inbox-message::part(mainImg) {
          height: 180px;
        }
      }
    </style>
  `
}

export const inboxContainerStyles = ({
  panelBackgroundColor,
  panelBorderColor,
  headerBackgroundColor,
  headerTitleColor,
  closeIconColor,
  categoriesTabColor,
  categoriesTitleColor,
  categoriesBorderColor,
  selectedCategoryTabColor,
  selectedCategoryTitleColor,
  selectedCategoryBorderColor
}) => {
  return `
      <style id="webInboxStyles">
        #inbox {
          width: 100%;
          position: fixed;
          background-color: #fff; 
          display: none; 
          box-shadow: 0px 2px 10px 0px #d7d7d791;
          background-color: ${panelBackgroundColor}; 
          border: 1px solid ${panelBorderColor};
          box-sizing: border-box;
          top: 0;
          left: 0;
          height: 100%;
          overflow: auto;
          z-index: 1;
        }
  
        #emptyInboxMsg {
          display: none;
          padding: 10px;
          text-align: center;
          color: black;
        }
  
        #header {
          height: 36px; 
          width: 100%; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          background-color: ${headerBackgroundColor}; 
          background-color: var(--card-bg, ${headerBackgroundColor});
          color: ${headerTitleColor}
        }
  
        #closeInbox {
          font-size: 20px; 
          margin-right: 12px; 
          color: ${closeIconColor}; 
          cursor: pointer;
        }
  
        #headerTitle {
          font-size: 14px; 
          line-height: 20px; 
          flex-grow: 1; 
          font-weight: 700; 
          text-align: center;
          flex-grow: 1;
          text-align: center;
        }
  
        #categoriesContainer {
          margin: 16px; 
          height: 32px; 
          display: flex;
          scroll-behavior: smooth;
          justify-content: center; 
          align-items: center;
          position: relative;
        }

        #categoriesWrapper {
          height: 32px; 
          overflow-x: scroll;
          display: flex;
          white-space: nowrap;
          width: -webkit-fill-available;
        }

        #categoriesWrapper::-webkit-scrollbar {
          display: none;
        }
  
        #leftArrow, #rightArrow {
          height: 32px;
          align-items: center;
          font-weight: 700;
          position: absolute;
          z-index: 2;
          pointer-events: auto;
          cursor: pointer;
          display: none;
        }

        #leftArrow {
          left: 0;
          padding-left: 4px;
          padding-right: 16px;
          background: linear-gradient(90deg, ${panelBackgroundColor} 0%, ${panelBackgroundColor}99 80%, ${panelBackgroundColor}0d 100%);
        }

        #rightArrow {
          right: 0;
          padding-right: 4px;
          padding-left: 16px;
          background: linear-gradient(-90deg, ${panelBackgroundColor} 0%, ${panelBackgroundColor}99 80%, ${panelBackgroundColor}0d 100%);
        }

        [id^="category-"] {
          display: flex; 
          flex: 1 1 0; 
          justify-content: center; 
          align-items: center; 
          font-size: 14px; 
          line-height: 20px; 
          background-color: ${categoriesTabColor}; 
          color: ${categoriesTitleColor}; 
          cursor: pointer;
          padding: 6px 24px;
          margin: 0 3px;
          border-radius: 16px;
          border: ${categoriesBorderColor ? '1px solid ' + categoriesBorderColor : 'none'};
        }

        [id^="category-"][selected="true"] {
          background-color: ${selectedCategoryTabColor}; 
          color: ${selectedCategoryTitleColor}; 
          border: ${selectedCategoryBorderColor ? '1px solid ' + selectedCategoryBorderColor : 'none'}
        }
  
        #inboxCard {
          padding: 8px 8px 0 8px;
          overflow-y: auto;
        }
  
        @media only screen and (min-width: 420px) {
          #inbox {
            width: var(--inbox-width, 392px);
            height: var(--inbox-height, 546px);
            position: var(--inbox-position, fixed);
            right: var(--inbox-right, unset);
            bottom: var(--inbox-bottom, unset);
            top: var(--inbox-top, unset);
            left: var(--inbox-left, unset);
          }
  
          #inboxCard {
            height: calc(var(--inbox-height, 546px) - 100px); 
            padding: 0 16px;
          }
  
        }
      </style>
      `
}
