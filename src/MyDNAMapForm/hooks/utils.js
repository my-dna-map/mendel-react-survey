const iconURL = window.REACT_APP_ICON_URL

const getIconURL = (icon) => {
  return `http://192.168.1.4/api/mendel/v1/from-icons/icon/${icon}.svg`
}

export default getIconURL
