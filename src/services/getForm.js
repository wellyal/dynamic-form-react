import axios from 'axios'

export const getForm = () =>
  axios.get('http://private-da937a-izitest1.apiary-mock.com/fields')
