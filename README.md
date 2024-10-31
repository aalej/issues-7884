# Repro for issue 7884

## Versions

1. Install dependencies
   - Run `cd functions`
   - Run `npm i`
   - Run `cd ../`
2. Run `firebase emulators:start --project demo-project`
   - Outputs
```
$ firebase emulators:start --project demo-project
i  emulators: Starting emulators: functions, extensions
i  emulators: Detected demo project ID "demo-project", emulated services will use a demo configuration and attempts to access non-emulated services for this project will fail.
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "/Users/<PATH>/issues/7884/functions" for Cloud Functions...
✔  functions: Using node@18 from host.
Serving at port 8581

✔  functions: Loaded functions definitions from source: admin_V1.
⚠  Error adding Task Queue function: FirebaseError: Unable to parse JSON: SyntaxError: Unexpected token I in JSON at position 0
i  functions[us-central1-admin_V1]: function ignored because the http emulator does not exist or is not running.

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌────────────┬────────────────┬──────────────────────────────────┐
│ Emulator   │ Host:Port      │ View in Emulator UI              │
├────────────┼────────────────┼──────────────────────────────────┤
│ Functions  │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions  │
├────────────┼────────────────┼──────────────────────────────────┤
│ Extensions │ 127.0.0.1:5001 │ http://127.0.0.1:4000/extensions │
└────────────┴────────────────┴──────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500
┌─────────────────────────┬───────────────┬─────────────────────┐
│ Extension Instance Name │ Extension Ref │ View in Emulator UI │
└─────────────────────────┴───────────────┴─────────────────────┘
Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.
```