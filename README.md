# ScoreboardMax API Types & Constants

This package provides TypeScript types and runtime constants for developers integrating with the ScoreboardMax API. All definitions are automatically generated from the official ScoreboardMax API source code to ensure accuracy and consistency.

**API Documentation:** [https://scoreboardmax.com/api/docs](https://scoreboardmax.com/api/docs)

## Installation

```bash
npm install @scoreboardmax/api-types
```

```bash
yarn add @scoreboardmax/api-types
```

```bash
pnpm add @scoreboardmax/api-types
```

```bash
bun add @scoreboardmax/api-types
```

## Usage

### TypeScript
```typescript
// Import types for API requests and responses
import { ScoreboardRequest, ScoreboardResponse, ScoreboardType } from "@scoreboardmax/api-types";

// Import runtime constants and enums
import { WebsocketOperation, WebsocketMessageType } from "@scoreboardmax/api-types";

// Use in your application
const request: ScoreboardRequest = {
  name: "Varsity Football",
  type: ScoreboardType.Basketball,
  data: { /* ... */ }
};

// Runtime constants work in conditionals
if (operation === WebsocketOperation.SendHeartbeat) {
  // Handle heartbeat
}
```

### JavaScript
```javascript
// CommonJS
const { WebsocketOperation, ScoreboardType } = require("@scoreboardmax/api-types");

// ES6 modules
import { WebsocketOperation, ScoreboardType } from "@scoreboardmax/api-types";

// Use runtime constants
if (body.operation === WebsocketOperation.GetConnectionId) {
  // Handle connection request
}
```

## What's Included

- **TypeScript Types**: Interfaces for API requests and responses
- **Runtime Constants**: Enums for operations, message types, and scoreboard types
- **Full Type Safety**: Complete IntelliSense support for TypeScript projects
- **Universal Compatibility**: Works with both CommonJS and ES6 module systems

## Contributing

This package is automatically generated from the ScoreboardMax API schema. If you find issues with the types:

1. Check if the issue exists in the API documentation
2. Report issues at: [GitHub Issues](https://github.com/scoreboardmax/api-types/issues)
3. For API-related issues, [contact ScoreboardMax support](https://scoreboardmax.com/#contact)

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Support

- **Contact Us**: [https://scoreboardmax.com/#contact](https://scoreboardmax.com/#contact)
- **Documentation**: [https://scoreboardmax.com/api/docs](https://scoreboardmax.com/api/docs)
- **GitHub Issues**: [https://github.com/scoreboardmax/api-types/issues](https://github.com/scoreboardmax/api-types/issues)
