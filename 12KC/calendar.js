/**
 * Created by amitthakkar on 01/12/16.
 */
/*
 * Create a function to calculate the positioning and width of meetings on a calendar for a single day (9 AM to 9 PM).
 * Assume each minute on the calendar to have a height of 2px(Total height = 1440px). The width should be 600px.
 *
 * - If there is one meeting between 11.30 and 12, show the meeting at the appropriate time, with a width of 600px.
 * - If there is more than one event, then the entire width should be split accordingly. (2 events of 300px each).
 * The input to the function will be an array of meeting objects with the time of the beginning and end specified in
 * minutes after 9 AM. For example,
 *
 * [{
 *   id : 123, start : 120, end : 150
 * }]
 *
 * specifies a meeting starting at 11 AM and ending at 11.30 AM.
 *
 * Return the array of the meetings with the width of each meeting, as well as the CSS attributes for its position.
 * (top and left)
 * */
(() => {
    let getMeetings = () => {
        return [
            {id: 1, start: 0, end: 60},
            {id: 2, start: 30, end: 90},
            {id: 3, start: 120, end: 150},
            {id: 4, start: 150, end: 210},
            {id: 5, start: 210, end: 270},
            {id: 6, start: 180, end: 240},
            {id: 7, start: 270, end: 330},
            {id: 8, start: 190, end: 230},
            {id: 9, start: 390, end: 540},
            {id: 10, start: 550, end: 610},
            {id: 11, start: 660, end: 720},
            {id: 12, start: 510, end: 540},
            {id: 13, start: 390, end: 510},
            {id: 14, start: 420, end: 520},
            {id: 15, start: 580, end: 620},
            {id: 16, start: 600, end: 640}
        ];
    };

    let getMeetingsWithPositions = () => {
        let meetingsWithCssAttributes = [];
        let conflicts = {};
        let meetingsLeft = {};
        let meetings = this.getMeetings();
        meetings.forEach((meeting) => {
            let left = 0;
            for (let start = meeting.start; start < meeting.end; start++) {
                conflicts[start] ? conflicts[start]++ : conflicts[start] = 1;
                if (conflicts[start] > left + 1) {
                    left = conflicts[start] - 1;
                }
            }
            meetingsLeft[meeting.id] = left;
        });
        meetings.forEach((meeting) => {
            let maxConflictMeeting = 1;
            for (let start = meeting.start; start < meeting.end; start++) {
                if (conflicts[start] > maxConflictMeeting) {
                    maxConflictMeeting = conflicts[start];
                }
            }
            meetingsWithCssAttributes.push({
                id: meeting.id,
                width: MAX_WIDTH / maxConflictMeeting,
                top: meeting.start * 2,
                height: (meeting.end * 2) - (meeting.start * 2),
                left: meetingsLeft[meeting.id] * MAX_WIDTH / maxConflictMeeting
            });
        });
        return meetingsWithCssAttributes;
    };

    console.log(getMeetingsWithPositions());
})();
