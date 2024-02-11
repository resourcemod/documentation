---
sidebar_position: 7
---

# Precache resources
In Source2 you need to "pre-cache" assets like models or music in order to use them on the server.

To do this, we made an array of paths to models in the `resourcemod.config.js` configuration file that you need to add to set to the players.

### Example of player.setModel

1. Put model into csgo/models folder.
2. Add model to Saido fastDL or use any other fastdl tool (like workshop).
3. Open `resourcemod.config.js` file
4. Put a model path into `precache` array.
```jsx
module.exports = {
    ...
    precache: ['models/characters/your_model.vmdl']
}
```
5. Set the model to player
```jsx
event.onPlayerSpawn((event) => {
    event.getPlayer().setModel('models/characters/your_model.vmdl')
})
```

### Sounds

If you use Saido FastDL, then you do not need to specify a precache for sounds; you can play the sound on the client like this:
```jsx
event.onPlayerSpawn((event) => {
    event.getPlayer().playSound('name/repository/file.vsnd') // will play sound 'sounds/name/repository/file.vsnd_c'
})
```

Read more about Saido FastDL here:
https://saido.dev/docs/server-assets/sounds