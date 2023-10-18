# ENI Project ChatRoom Angular

## ChatRoom Application with Angular

### GUI prototype
Use a simple ASCII design

```less
+--------------------------------------------------------+
|  ChatRoom               | Handle: [        ] [Connect] |
+---------+----------------------------------------------+
|         | @User1                                       ^
|Users:   |  this is an exemple of message that takes    |
| - User1 |  multiple lines.                             |
| - User2 | ---                                          |
| - User3 | @User3                                       |
|         |  Response                                    |
|         | ---                                          |
|         | @User2                                       |
|         |  Last message sent to the chatroom           v
+---------+----------------------------------------------+
|  Message: [ --------- connect first --------- ] [Send] |
+--------------------------------------------------------+
```

### Features
- Simple handle identification (no auth for now).
- List of users that spoke in the chat
- Input for new message
- List of message from vertical descending chronological order
- Real time and persistant

### Exception Handling
- No messages in the chatroom
- Sending a message without a handle

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
