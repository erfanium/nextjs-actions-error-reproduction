"use server";

const defineAction = <T, U>({ cb }: { cb: (params: T) => Promise<U> }) => cb;

export const action = defineAction({
  async cb({ foo }: { foo: string }) {
    (() => {
      console.log(foo);
    })();
    return foo;
  },
});
