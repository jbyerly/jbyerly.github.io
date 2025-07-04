const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);


document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next',
        //right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Sunday Service',
          date: '2025-05-04',
          color: 'var(--primary-color)'
        },
        {
          title: 'Bible Study',
          date: '2025-05-07',
          color: '#29333a'
        },
        {
            title: 'Sunday Service',
            date: '2025-05-11',
            color: 'var(--primary-color)'
          },
          {
            title: 'Bible Study',
            date: '2025-05-14',
            color: '#29333a'
          }
        // Add more event objects here as needed
      ],
      // Additional configuration such as eventClick or dateClick can enhance interactivity.

     dateClick: function(info) {
      //alert('title ' + info.dateStr);
      alert('title ' + info.jsEvent.title);
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      alert('Current view: ' + info.view.type);
    // change the day's background color just for fun
      info.dayEl.style.backgroundColor = 'red';
  }
      //eventClick: function(info) {
      //  alert('Event: ' + info.event.title + starttime);
        // Optionally, display more details or link to an event page.
      //}
    });
  
    calendar.render();
    calendar.updateSize();
  });
  

