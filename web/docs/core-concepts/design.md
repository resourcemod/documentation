---
sidebar_position: 1
---

# Plugins design

The main principles of creating plugins "as intended".

### KISS.
KISS (keep it simple, stupid) - top 1 priority.

### English first.
Please use English as the primary language for your plugins. It is an international language and will be understood by everyone without exception.

### Leave less trash behind.

Save all plugin files in the same folder as this plugin. Usually several plugins from different developers are used on servers - please don't turn the resourcemod folder into a plugin trash.

### Use github.

ResourceMod will support a package manager in the near future for easy interaction with plugins. This package manager will take all the necessary information from the github repository, and will also download the latest plugin release from github.

### Single Responsibility.

For many people this term means nothing, but if you want your plugin to be developed by the community - please separate the logic and don't write everything in one plugin.js file.

### C++ is a low level, javascript is a high level.

When we first started creating resourcemod - we imagined that we would add all the features that users would need inside the engine. That was a mistake. Please use c++ to support low-level things like http. And after that create a high-level Javascript package, which will be used by plugin creators.

### Opensource first.

You won't be able to copy-protect your plugin as we haven't implemented our package manager yet. Please write opensource plugins before we finalize our services.