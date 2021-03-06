import order from './inc/order'
const app = {
  init () {
    // if the displayed page is the summary page then we execute
    if (document.title.includes('Récapitulatif') === true) {
      const summary = JSON.parse(order.getOrder())

      if (summary.orderId === undefined) {
        document.getElementById('order__message').classList.add('d-none')
        document.getElementById('order__summary').classList.add('d-none')
        document.getElementById('order__no').classList.remove('d-none')
      } else {
        document.getElementById('order__firstName').innerText = summary.contact.firstName
        document.getElementById('order__email').innerText = summary.contact.email
        document.getElementById('order__id').innerText = summary.orderId
        document.getElementById('read').addEventListener('click', event => app.handleRead(event))
        app.displaySummary()
      }
    }
  },
  handleRead (event) {
    order.deleterOrder()
    window.location.href = 'index.html'
  },
  displaySummary () {
    const summary = JSON.parse(order.getOrder())
    for (const product of summary.products) {
      order.displayOrder(product)
    }
    order.updateSum()
  }

}
document.addEventListener('DOMContentLoaded', app.init)
