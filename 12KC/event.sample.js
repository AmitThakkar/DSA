/**
 * Created by amitthakkar on 01/12/16.
 */
let EventHandler = (() => {
    function Event() {
        let events = {};
        this.on = (eventName, listner) => {
            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(listner);
        };
        this.trigger = (eventName, data) => {
            if (!events[eventName]) {
                return new Error('No Event Fount with name: ' + eventName);
            }
            let listeners = events[eventName];
            listeners.forEach((listner) => {
                listner(data);
            })
        };
    }

    let event;

    return {
        getInstance: () => {
            if (!event) {
                event = new Event();
            }
            return event;
        }
    }
})();

// a.js
(() => {
    let fileName = 'a.js';
    let event = EventHandler.getInstance();
    event.on('Bye', (data) => {
        console.log('Hi event called in ' + fileName, 'with Data: ', data);
    });
    event.on('Hello', (data) => {
        console.log('Hi event called in ' + fileName, 'with Data: ', data);
    });
})();

// b.js
(() => {
    let fileName = 'b.js';
    let event = EventHandler.getInstance();
    event.on('Hi', (data) => {
        console.log('Hi event called in ' + fileName, 'with Data: ', data);
    });
    event.on('Bye', (data) => {
        console.log('Hi event called in ' + fileName, 'with Data: ', data);
    });
})();

// c.js
(() => {
    let event = EventHandler.getInstance();
    event.trigger('Hi', {name: 'Amit'});
    event.trigger('Hello', {name: 'Girish'});
    event.trigger('Bye', {name: 'Vikas'});
    event.trigger('X', {name: 'Vikas'});
})();
