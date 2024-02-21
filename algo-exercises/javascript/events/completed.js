// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    // console.log('eventName', eventName)
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback];
    }
    // console.log('this.events[eventName]', this.events[eventName])
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb) => cb())
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}

const event = new Events();
event.on("click", () => {
  console.log("hello world")
})

event.trigger("click")

event.on("click", () => {
  console.log("hello world...AGAIN!")
})

event.trigger("click")

event.on("focus", () => {
  console.log("hellooooooooooo")
})

console.log('event before delete', event)

event.off("click")

console.log('event after delete', event)

module.exports = Events;
