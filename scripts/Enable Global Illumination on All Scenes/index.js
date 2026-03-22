const updates = game.scenes.map(scene => {
  return {
    _id: scene.id,
    globalLight: true
  };
});

await Scene.updateDocuments(updates);

ui.notifications.info(`Successfully enabled Global Illumination for ${updates.length} scenes.`)