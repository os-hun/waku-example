import type { ReactNode } from "react";

import { Link } from "waku/router/server";
import { getCounter, increment } from '../src/func.js'
import { Counter } from '../src/Counter.js'

const Pending = ({ isPending }: { isPending: boolean }) => (
  <span
    style={{
      marginLeft: 5,
      transition: 'opacity 75ms 100ms',
      opacity: isPending ? 1 : 0
    }}
  >
    Pending...
  </span>
)

export default ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link
            href="/"
            pending={<Pending isPending />}
            notPending={<Pending isPending={false} />}
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/nested/baz">nested/baz</Link>
        </li>
      </ul>
      <h1>Home</h1>
      <p>Server Counter: {getCounter()}</p>
      <Counter increment={increment} />
      {children}
    </div>
  )
}