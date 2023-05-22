const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: true,
        canCheckout: false,
        canCheckIn: false,
    }
}

// Edit below line 

const statuses = document.querySelectorAll('.status');                //put all together as one memory in a block. //querySelect all .status, .reserve, .checkout, .checkin.
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

statuses.forEach(function(status, index) {                            //add function to add status and index file of the html  .forEach Index of Books 1, 2, 3.   
  const bookStatus = status.textContent;
  const statusInfo = STATUS_MAP[bookStatus];                          //status map is a visual representation that shows the progress or status of different tasks, milestones, or features within a project.

  status.style.color = statusInfo.color;
  reserveButtons[index].disabled = !statusInfo.canReserve;           //check the index for status of element.
  checkoutButtons[index].disabled = !statusInfo.canCheckout;
  checkinButtons[index].disabled = !statusInfo.canCheckIn;
});

/*status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'*/