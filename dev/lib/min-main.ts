export default function main(app: (helpers: { abort: () => void }) => Promise<void>) {
  app({ abort }).catch(e => {
    let code = 1;
    if (e instanceof StopError) {
      code = e.exitCode;
    } else {
      console.error('Error:', e.stack || e.message);
    }
    process.exit(code);
  });
}

class StopError extends Error {
  constructor(readonly exitCode: number) {
    super('');
  }
}

/** Stop execution */
function abort(exitCode: number = 1): never {
  throw new StopError(exitCode);
}