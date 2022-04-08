
// <div className="calendar-tab">
//   <div className="event-view-container">
//     <div className="event-date">
//       <p className="event-date-monthday">{moment(date).format("D")}</p>
//       <p className="event-date-weekday">{moment(date).format("dddd")}</p>
//     </div>
//     <div className="event-list">
//       {eventList.map((event, index) => (
//         <Accordion
//           key={`event-${index}`}
//           square
//           expanded={expanded === `event${index + 1}`}
//           onChange={handleChangeAccordion(`event${index + 1}`)}
//         >
//           <AccordionSummary>
//             <div className="event-list-item-header">
//               <span className="duration">{`${moment(
//                 event.duration.from
//               ).format("h:mm A")} - ${moment(event.duration.to).format(
//                 "h:mm A"
//               )}`}</span>
//               <span className="title">{event.title}</span>
//             </div>
//           </AccordionSummary>
//           <AccordionDetails>
//             <div className="event-list-item-content">
//               <div className="header">
//                 <span className="announcements">Announcements</span>
//                 <div className="plus">
//                   <ControlPoint />
//                 </div>
//               </div>
//               <div
//                 className="content"
//                 dangerouslySetInnerHTML={{ __html: event.content }}
//               />
//             </div>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   </div>
//   <div className="calendar-view-container">
//     <div className="event-calendar-container">
//       <EventCalendar
//         className="event-calendar"
//         formatShortWeekday={(locale, date) =>
//           moment(date).format("dd").charAt(0)
//         }
//         tileClassName={({ date }) => {
//           if (events.find((x) => moment(x.date).isSame(date, "day"))) {
//             return "highlight";
//           }
     