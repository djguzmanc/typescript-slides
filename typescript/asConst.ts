const anObjectThatNobodyShouldModify = {
  transactionAmount: 1200, // 🤑
  isApproved: true,
  to: {
    name: 'Mauricio',
    id: '😛'
  }
};

// Is allowed to modify the id 
anObjectThatNobodyShouldModify.to.id = '💀';

// Let's fix it
const aSafeObjectThatNobodyShouldModify = {
  transactionAmount: 1200, // 🤑
  isApproved: true,
  to: {
    name: 'Mauricio',
    id: '😛'
  }
} as const;

// Typescript complains! 🤩
aSafeObjectThatNobodyShouldModify.to.id = '💀';

// Typescript 0 - Immutable.js 1 😔
(aSafeObjectThatNobodyShouldModify as any).to.id = '💀';

// Notice that the readonly behavior is applied deeply not just
// shallow

function assert(obj: unknown): asserts obj is string {
  if (typeof obj !== 'string') throw new Error("Not a string!");
}

const z = (a: unknown) => {
  assert(a);
  a.toLocaleLowerCase();
}