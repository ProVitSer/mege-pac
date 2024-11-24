
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PbxCdr
 * 
 */
export type PbxCdr = $Result.DefaultSelection<Prisma.$PbxCdrPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PbxCdrs
 * const pbxCdrs = await prisma.pbxCdr.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PbxCdrs
   * const pbxCdrs = await prisma.pbxCdr.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.pbxCdr`: Exposes CRUD operations for the **PbxCdr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PbxCdrs
    * const pbxCdrs = await prisma.pbxCdr.findMany()
    * ```
    */
  get pbxCdr(): Prisma.PbxCdrDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PbxCdr: 'PbxCdr'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "pbxCdr"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PbxCdr: {
        payload: Prisma.$PbxCdrPayload<ExtArgs>
        fields: Prisma.PbxCdrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PbxCdrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PbxCdrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>
          }
          findFirst: {
            args: Prisma.PbxCdrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PbxCdrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>
          }
          findMany: {
            args: Prisma.PbxCdrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>[]
          }
          create: {
            args: Prisma.PbxCdrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>
          }
          createMany: {
            args: Prisma.PbxCdrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PbxCdrCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>[]
          }
          delete: {
            args: Prisma.PbxCdrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>
          }
          update: {
            args: Prisma.PbxCdrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>
          }
          deleteMany: {
            args: Prisma.PbxCdrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PbxCdrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PbxCdrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PbxCdrPayload>
          }
          aggregate: {
            args: Prisma.PbxCdrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePbxCdr>
          }
          groupBy: {
            args: Prisma.PbxCdrGroupByArgs<ExtArgs>
            result: $Utils.Optional<PbxCdrGroupByOutputType>[]
          }
          count: {
            args: Prisma.PbxCdrCountArgs<ExtArgs>
            result: $Utils.Optional<PbxCdrCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PbxCdr
   */

  export type AggregatePbxCdr = {
    _count: PbxCdrCountAggregateOutputType | null
    _avg: PbxCdrAvgAggregateOutputType | null
    _sum: PbxCdrSumAggregateOutputType | null
    _min: PbxCdrMinAggregateOutputType | null
    _max: PbxCdrMaxAggregateOutputType | null
  }

  export type PbxCdrAvgAggregateOutputType = {
    id: number | null
    call_id: number | null
    segment_id: number | null
  }

  export type PbxCdrSumAggregateOutputType = {
    id: number | null
    call_id: number | null
    segment_id: number | null
  }

  export type PbxCdrMinAggregateOutputType = {
    id: number | null
    call_id: number | null
    answered: boolean | null
    destination_caller_id: string | null
    ringing_duration: string | null
    source_caller_id: string | null
    start_time: string | null
    talking_duration: string | null
    recording_url: string | null
    segment_id: number | null
  }

  export type PbxCdrMaxAggregateOutputType = {
    id: number | null
    call_id: number | null
    answered: boolean | null
    destination_caller_id: string | null
    ringing_duration: string | null
    source_caller_id: string | null
    start_time: string | null
    talking_duration: string | null
    recording_url: string | null
    segment_id: number | null
  }

  export type PbxCdrCountAggregateOutputType = {
    id: number
    call_id: number
    answered: number
    destination_caller_id: number
    ringing_duration: number
    source_caller_id: number
    start_time: number
    talking_duration: number
    recording_url: number
    segment_id: number
    _all: number
  }


  export type PbxCdrAvgAggregateInputType = {
    id?: true
    call_id?: true
    segment_id?: true
  }

  export type PbxCdrSumAggregateInputType = {
    id?: true
    call_id?: true
    segment_id?: true
  }

  export type PbxCdrMinAggregateInputType = {
    id?: true
    call_id?: true
    answered?: true
    destination_caller_id?: true
    ringing_duration?: true
    source_caller_id?: true
    start_time?: true
    talking_duration?: true
    recording_url?: true
    segment_id?: true
  }

  export type PbxCdrMaxAggregateInputType = {
    id?: true
    call_id?: true
    answered?: true
    destination_caller_id?: true
    ringing_duration?: true
    source_caller_id?: true
    start_time?: true
    talking_duration?: true
    recording_url?: true
    segment_id?: true
  }

  export type PbxCdrCountAggregateInputType = {
    id?: true
    call_id?: true
    answered?: true
    destination_caller_id?: true
    ringing_duration?: true
    source_caller_id?: true
    start_time?: true
    talking_duration?: true
    recording_url?: true
    segment_id?: true
    _all?: true
  }

  export type PbxCdrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PbxCdr to aggregate.
     */
    where?: PbxCdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PbxCdrs to fetch.
     */
    orderBy?: PbxCdrOrderByWithRelationInput | PbxCdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PbxCdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PbxCdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PbxCdrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PbxCdrs
    **/
    _count?: true | PbxCdrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PbxCdrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PbxCdrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PbxCdrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PbxCdrMaxAggregateInputType
  }

  export type GetPbxCdrAggregateType<T extends PbxCdrAggregateArgs> = {
        [P in keyof T & keyof AggregatePbxCdr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePbxCdr[P]>
      : GetScalarType<T[P], AggregatePbxCdr[P]>
  }




  export type PbxCdrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PbxCdrWhereInput
    orderBy?: PbxCdrOrderByWithAggregationInput | PbxCdrOrderByWithAggregationInput[]
    by: PbxCdrScalarFieldEnum[] | PbxCdrScalarFieldEnum
    having?: PbxCdrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PbxCdrCountAggregateInputType | true
    _avg?: PbxCdrAvgAggregateInputType
    _sum?: PbxCdrSumAggregateInputType
    _min?: PbxCdrMinAggregateInputType
    _max?: PbxCdrMaxAggregateInputType
  }

  export type PbxCdrGroupByOutputType = {
    id: number
    call_id: number
    answered: boolean
    destination_caller_id: string | null
    ringing_duration: string | null
    source_caller_id: string | null
    start_time: string | null
    talking_duration: string | null
    recording_url: string | null
    segment_id: number
    _count: PbxCdrCountAggregateOutputType | null
    _avg: PbxCdrAvgAggregateOutputType | null
    _sum: PbxCdrSumAggregateOutputType | null
    _min: PbxCdrMinAggregateOutputType | null
    _max: PbxCdrMaxAggregateOutputType | null
  }

  type GetPbxCdrGroupByPayload<T extends PbxCdrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PbxCdrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PbxCdrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PbxCdrGroupByOutputType[P]>
            : GetScalarType<T[P], PbxCdrGroupByOutputType[P]>
        }
      >
    >


  export type PbxCdrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    call_id?: boolean
    answered?: boolean
    destination_caller_id?: boolean
    ringing_duration?: boolean
    source_caller_id?: boolean
    start_time?: boolean
    talking_duration?: boolean
    recording_url?: boolean
    segment_id?: boolean
  }, ExtArgs["result"]["pbxCdr"]>

  export type PbxCdrSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    call_id?: boolean
    answered?: boolean
    destination_caller_id?: boolean
    ringing_duration?: boolean
    source_caller_id?: boolean
    start_time?: boolean
    talking_duration?: boolean
    recording_url?: boolean
    segment_id?: boolean
  }, ExtArgs["result"]["pbxCdr"]>

  export type PbxCdrSelectScalar = {
    id?: boolean
    call_id?: boolean
    answered?: boolean
    destination_caller_id?: boolean
    ringing_duration?: boolean
    source_caller_id?: boolean
    start_time?: boolean
    talking_duration?: boolean
    recording_url?: boolean
    segment_id?: boolean
  }


  export type $PbxCdrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PbxCdr"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      call_id: number
      answered: boolean
      destination_caller_id: string | null
      ringing_duration: string | null
      source_caller_id: string | null
      start_time: string | null
      talking_duration: string | null
      recording_url: string | null
      segment_id: number
    }, ExtArgs["result"]["pbxCdr"]>
    composites: {}
  }

  type PbxCdrGetPayload<S extends boolean | null | undefined | PbxCdrDefaultArgs> = $Result.GetResult<Prisma.$PbxCdrPayload, S>

  type PbxCdrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PbxCdrFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PbxCdrCountAggregateInputType | true
    }

  export interface PbxCdrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PbxCdr'], meta: { name: 'PbxCdr' } }
    /**
     * Find zero or one PbxCdr that matches the filter.
     * @param {PbxCdrFindUniqueArgs} args - Arguments to find a PbxCdr
     * @example
     * // Get one PbxCdr
     * const pbxCdr = await prisma.pbxCdr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PbxCdrFindUniqueArgs>(args: SelectSubset<T, PbxCdrFindUniqueArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PbxCdr that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PbxCdrFindUniqueOrThrowArgs} args - Arguments to find a PbxCdr
     * @example
     * // Get one PbxCdr
     * const pbxCdr = await prisma.pbxCdr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PbxCdrFindUniqueOrThrowArgs>(args: SelectSubset<T, PbxCdrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PbxCdr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrFindFirstArgs} args - Arguments to find a PbxCdr
     * @example
     * // Get one PbxCdr
     * const pbxCdr = await prisma.pbxCdr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PbxCdrFindFirstArgs>(args?: SelectSubset<T, PbxCdrFindFirstArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PbxCdr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrFindFirstOrThrowArgs} args - Arguments to find a PbxCdr
     * @example
     * // Get one PbxCdr
     * const pbxCdr = await prisma.pbxCdr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PbxCdrFindFirstOrThrowArgs>(args?: SelectSubset<T, PbxCdrFindFirstOrThrowArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PbxCdrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PbxCdrs
     * const pbxCdrs = await prisma.pbxCdr.findMany()
     * 
     * // Get first 10 PbxCdrs
     * const pbxCdrs = await prisma.pbxCdr.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pbxCdrWithIdOnly = await prisma.pbxCdr.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PbxCdrFindManyArgs>(args?: SelectSubset<T, PbxCdrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PbxCdr.
     * @param {PbxCdrCreateArgs} args - Arguments to create a PbxCdr.
     * @example
     * // Create one PbxCdr
     * const PbxCdr = await prisma.pbxCdr.create({
     *   data: {
     *     // ... data to create a PbxCdr
     *   }
     * })
     * 
     */
    create<T extends PbxCdrCreateArgs>(args: SelectSubset<T, PbxCdrCreateArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PbxCdrs.
     * @param {PbxCdrCreateManyArgs} args - Arguments to create many PbxCdrs.
     * @example
     * // Create many PbxCdrs
     * const pbxCdr = await prisma.pbxCdr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PbxCdrCreateManyArgs>(args?: SelectSubset<T, PbxCdrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PbxCdrs and returns the data saved in the database.
     * @param {PbxCdrCreateManyAndReturnArgs} args - Arguments to create many PbxCdrs.
     * @example
     * // Create many PbxCdrs
     * const pbxCdr = await prisma.pbxCdr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PbxCdrs and only return the `id`
     * const pbxCdrWithIdOnly = await prisma.pbxCdr.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PbxCdrCreateManyAndReturnArgs>(args?: SelectSubset<T, PbxCdrCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PbxCdr.
     * @param {PbxCdrDeleteArgs} args - Arguments to delete one PbxCdr.
     * @example
     * // Delete one PbxCdr
     * const PbxCdr = await prisma.pbxCdr.delete({
     *   where: {
     *     // ... filter to delete one PbxCdr
     *   }
     * })
     * 
     */
    delete<T extends PbxCdrDeleteArgs>(args: SelectSubset<T, PbxCdrDeleteArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PbxCdr.
     * @param {PbxCdrUpdateArgs} args - Arguments to update one PbxCdr.
     * @example
     * // Update one PbxCdr
     * const pbxCdr = await prisma.pbxCdr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PbxCdrUpdateArgs>(args: SelectSubset<T, PbxCdrUpdateArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PbxCdrs.
     * @param {PbxCdrDeleteManyArgs} args - Arguments to filter PbxCdrs to delete.
     * @example
     * // Delete a few PbxCdrs
     * const { count } = await prisma.pbxCdr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PbxCdrDeleteManyArgs>(args?: SelectSubset<T, PbxCdrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PbxCdrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PbxCdrs
     * const pbxCdr = await prisma.pbxCdr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PbxCdrUpdateManyArgs>(args: SelectSubset<T, PbxCdrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PbxCdr.
     * @param {PbxCdrUpsertArgs} args - Arguments to update or create a PbxCdr.
     * @example
     * // Update or create a PbxCdr
     * const pbxCdr = await prisma.pbxCdr.upsert({
     *   create: {
     *     // ... data to create a PbxCdr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PbxCdr we want to update
     *   }
     * })
     */
    upsert<T extends PbxCdrUpsertArgs>(args: SelectSubset<T, PbxCdrUpsertArgs<ExtArgs>>): Prisma__PbxCdrClient<$Result.GetResult<Prisma.$PbxCdrPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PbxCdrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrCountArgs} args - Arguments to filter PbxCdrs to count.
     * @example
     * // Count the number of PbxCdrs
     * const count = await prisma.pbxCdr.count({
     *   where: {
     *     // ... the filter for the PbxCdrs we want to count
     *   }
     * })
    **/
    count<T extends PbxCdrCountArgs>(
      args?: Subset<T, PbxCdrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PbxCdrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PbxCdr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PbxCdrAggregateArgs>(args: Subset<T, PbxCdrAggregateArgs>): Prisma.PrismaPromise<GetPbxCdrAggregateType<T>>

    /**
     * Group by PbxCdr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PbxCdrGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PbxCdrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PbxCdrGroupByArgs['orderBy'] }
        : { orderBy?: PbxCdrGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PbxCdrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPbxCdrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PbxCdr model
   */
  readonly fields: PbxCdrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PbxCdr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PbxCdrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PbxCdr model
   */ 
  interface PbxCdrFieldRefs {
    readonly id: FieldRef<"PbxCdr", 'Int'>
    readonly call_id: FieldRef<"PbxCdr", 'Int'>
    readonly answered: FieldRef<"PbxCdr", 'Boolean'>
    readonly destination_caller_id: FieldRef<"PbxCdr", 'String'>
    readonly ringing_duration: FieldRef<"PbxCdr", 'String'>
    readonly source_caller_id: FieldRef<"PbxCdr", 'String'>
    readonly start_time: FieldRef<"PbxCdr", 'String'>
    readonly talking_duration: FieldRef<"PbxCdr", 'String'>
    readonly recording_url: FieldRef<"PbxCdr", 'String'>
    readonly segment_id: FieldRef<"PbxCdr", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PbxCdr findUnique
   */
  export type PbxCdrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * Filter, which PbxCdr to fetch.
     */
    where: PbxCdrWhereUniqueInput
  }

  /**
   * PbxCdr findUniqueOrThrow
   */
  export type PbxCdrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * Filter, which PbxCdr to fetch.
     */
    where: PbxCdrWhereUniqueInput
  }

  /**
   * PbxCdr findFirst
   */
  export type PbxCdrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * Filter, which PbxCdr to fetch.
     */
    where?: PbxCdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PbxCdrs to fetch.
     */
    orderBy?: PbxCdrOrderByWithRelationInput | PbxCdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PbxCdrs.
     */
    cursor?: PbxCdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PbxCdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PbxCdrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PbxCdrs.
     */
    distinct?: PbxCdrScalarFieldEnum | PbxCdrScalarFieldEnum[]
  }

  /**
   * PbxCdr findFirstOrThrow
   */
  export type PbxCdrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * Filter, which PbxCdr to fetch.
     */
    where?: PbxCdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PbxCdrs to fetch.
     */
    orderBy?: PbxCdrOrderByWithRelationInput | PbxCdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PbxCdrs.
     */
    cursor?: PbxCdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PbxCdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PbxCdrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PbxCdrs.
     */
    distinct?: PbxCdrScalarFieldEnum | PbxCdrScalarFieldEnum[]
  }

  /**
   * PbxCdr findMany
   */
  export type PbxCdrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * Filter, which PbxCdrs to fetch.
     */
    where?: PbxCdrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PbxCdrs to fetch.
     */
    orderBy?: PbxCdrOrderByWithRelationInput | PbxCdrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PbxCdrs.
     */
    cursor?: PbxCdrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PbxCdrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PbxCdrs.
     */
    skip?: number
    distinct?: PbxCdrScalarFieldEnum | PbxCdrScalarFieldEnum[]
  }

  /**
   * PbxCdr create
   */
  export type PbxCdrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * The data needed to create a PbxCdr.
     */
    data: XOR<PbxCdrCreateInput, PbxCdrUncheckedCreateInput>
  }

  /**
   * PbxCdr createMany
   */
  export type PbxCdrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PbxCdrs.
     */
    data: PbxCdrCreateManyInput | PbxCdrCreateManyInput[]
  }

  /**
   * PbxCdr createManyAndReturn
   */
  export type PbxCdrCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PbxCdrs.
     */
    data: PbxCdrCreateManyInput | PbxCdrCreateManyInput[]
  }

  /**
   * PbxCdr update
   */
  export type PbxCdrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * The data needed to update a PbxCdr.
     */
    data: XOR<PbxCdrUpdateInput, PbxCdrUncheckedUpdateInput>
    /**
     * Choose, which PbxCdr to update.
     */
    where: PbxCdrWhereUniqueInput
  }

  /**
   * PbxCdr updateMany
   */
  export type PbxCdrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PbxCdrs.
     */
    data: XOR<PbxCdrUpdateManyMutationInput, PbxCdrUncheckedUpdateManyInput>
    /**
     * Filter which PbxCdrs to update
     */
    where?: PbxCdrWhereInput
  }

  /**
   * PbxCdr upsert
   */
  export type PbxCdrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * The filter to search for the PbxCdr to update in case it exists.
     */
    where: PbxCdrWhereUniqueInput
    /**
     * In case the PbxCdr found by the `where` argument doesn't exist, create a new PbxCdr with this data.
     */
    create: XOR<PbxCdrCreateInput, PbxCdrUncheckedCreateInput>
    /**
     * In case the PbxCdr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PbxCdrUpdateInput, PbxCdrUncheckedUpdateInput>
  }

  /**
   * PbxCdr delete
   */
  export type PbxCdrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
    /**
     * Filter which PbxCdr to delete.
     */
    where: PbxCdrWhereUniqueInput
  }

  /**
   * PbxCdr deleteMany
   */
  export type PbxCdrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PbxCdrs to delete
     */
    where?: PbxCdrWhereInput
  }

  /**
   * PbxCdr without action
   */
  export type PbxCdrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PbxCdr
     */
    select?: PbxCdrSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PbxCdrScalarFieldEnum: {
    id: 'id',
    call_id: 'call_id',
    answered: 'answered',
    destination_caller_id: 'destination_caller_id',
    ringing_duration: 'ringing_duration',
    source_caller_id: 'source_caller_id',
    start_time: 'start_time',
    talking_duration: 'talking_duration',
    recording_url: 'recording_url',
    segment_id: 'segment_id'
  };

  export type PbxCdrScalarFieldEnum = (typeof PbxCdrScalarFieldEnum)[keyof typeof PbxCdrScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PbxCdrWhereInput = {
    AND?: PbxCdrWhereInput | PbxCdrWhereInput[]
    OR?: PbxCdrWhereInput[]
    NOT?: PbxCdrWhereInput | PbxCdrWhereInput[]
    id?: IntFilter<"PbxCdr"> | number
    call_id?: IntFilter<"PbxCdr"> | number
    answered?: BoolFilter<"PbxCdr"> | boolean
    destination_caller_id?: StringNullableFilter<"PbxCdr"> | string | null
    ringing_duration?: StringNullableFilter<"PbxCdr"> | string | null
    source_caller_id?: StringNullableFilter<"PbxCdr"> | string | null
    start_time?: StringNullableFilter<"PbxCdr"> | string | null
    talking_duration?: StringNullableFilter<"PbxCdr"> | string | null
    recording_url?: StringNullableFilter<"PbxCdr"> | string | null
    segment_id?: IntFilter<"PbxCdr"> | number
  }

  export type PbxCdrOrderByWithRelationInput = {
    id?: SortOrder
    call_id?: SortOrder
    answered?: SortOrder
    destination_caller_id?: SortOrderInput | SortOrder
    ringing_duration?: SortOrderInput | SortOrder
    source_caller_id?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    talking_duration?: SortOrderInput | SortOrder
    recording_url?: SortOrderInput | SortOrder
    segment_id?: SortOrder
  }

  export type PbxCdrWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    segment_id?: number
    AND?: PbxCdrWhereInput | PbxCdrWhereInput[]
    OR?: PbxCdrWhereInput[]
    NOT?: PbxCdrWhereInput | PbxCdrWhereInput[]
    call_id?: IntFilter<"PbxCdr"> | number
    answered?: BoolFilter<"PbxCdr"> | boolean
    destination_caller_id?: StringNullableFilter<"PbxCdr"> | string | null
    ringing_duration?: StringNullableFilter<"PbxCdr"> | string | null
    source_caller_id?: StringNullableFilter<"PbxCdr"> | string | null
    start_time?: StringNullableFilter<"PbxCdr"> | string | null
    talking_duration?: StringNullableFilter<"PbxCdr"> | string | null
    recording_url?: StringNullableFilter<"PbxCdr"> | string | null
  }, "id" | "segment_id">

  export type PbxCdrOrderByWithAggregationInput = {
    id?: SortOrder
    call_id?: SortOrder
    answered?: SortOrder
    destination_caller_id?: SortOrderInput | SortOrder
    ringing_duration?: SortOrderInput | SortOrder
    source_caller_id?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    talking_duration?: SortOrderInput | SortOrder
    recording_url?: SortOrderInput | SortOrder
    segment_id?: SortOrder
    _count?: PbxCdrCountOrderByAggregateInput
    _avg?: PbxCdrAvgOrderByAggregateInput
    _max?: PbxCdrMaxOrderByAggregateInput
    _min?: PbxCdrMinOrderByAggregateInput
    _sum?: PbxCdrSumOrderByAggregateInput
  }

  export type PbxCdrScalarWhereWithAggregatesInput = {
    AND?: PbxCdrScalarWhereWithAggregatesInput | PbxCdrScalarWhereWithAggregatesInput[]
    OR?: PbxCdrScalarWhereWithAggregatesInput[]
    NOT?: PbxCdrScalarWhereWithAggregatesInput | PbxCdrScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PbxCdr"> | number
    call_id?: IntWithAggregatesFilter<"PbxCdr"> | number
    answered?: BoolWithAggregatesFilter<"PbxCdr"> | boolean
    destination_caller_id?: StringNullableWithAggregatesFilter<"PbxCdr"> | string | null
    ringing_duration?: StringNullableWithAggregatesFilter<"PbxCdr"> | string | null
    source_caller_id?: StringNullableWithAggregatesFilter<"PbxCdr"> | string | null
    start_time?: StringNullableWithAggregatesFilter<"PbxCdr"> | string | null
    talking_duration?: StringNullableWithAggregatesFilter<"PbxCdr"> | string | null
    recording_url?: StringNullableWithAggregatesFilter<"PbxCdr"> | string | null
    segment_id?: IntWithAggregatesFilter<"PbxCdr"> | number
  }

  export type PbxCdrCreateInput = {
    call_id: number
    answered: boolean
    destination_caller_id?: string | null
    ringing_duration?: string | null
    source_caller_id?: string | null
    start_time?: string | null
    talking_duration?: string | null
    recording_url?: string | null
    segment_id: number
  }

  export type PbxCdrUncheckedCreateInput = {
    id?: number
    call_id: number
    answered: boolean
    destination_caller_id?: string | null
    ringing_duration?: string | null
    source_caller_id?: string | null
    start_time?: string | null
    talking_duration?: string | null
    recording_url?: string | null
    segment_id: number
  }

  export type PbxCdrUpdateInput = {
    call_id?: IntFieldUpdateOperationsInput | number
    answered?: BoolFieldUpdateOperationsInput | boolean
    destination_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    ringing_duration?: NullableStringFieldUpdateOperationsInput | string | null
    source_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    talking_duration?: NullableStringFieldUpdateOperationsInput | string | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    segment_id?: IntFieldUpdateOperationsInput | number
  }

  export type PbxCdrUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    call_id?: IntFieldUpdateOperationsInput | number
    answered?: BoolFieldUpdateOperationsInput | boolean
    destination_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    ringing_duration?: NullableStringFieldUpdateOperationsInput | string | null
    source_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    talking_duration?: NullableStringFieldUpdateOperationsInput | string | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    segment_id?: IntFieldUpdateOperationsInput | number
  }

  export type PbxCdrCreateManyInput = {
    id?: number
    call_id: number
    answered: boolean
    destination_caller_id?: string | null
    ringing_duration?: string | null
    source_caller_id?: string | null
    start_time?: string | null
    talking_duration?: string | null
    recording_url?: string | null
    segment_id: number
  }

  export type PbxCdrUpdateManyMutationInput = {
    call_id?: IntFieldUpdateOperationsInput | number
    answered?: BoolFieldUpdateOperationsInput | boolean
    destination_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    ringing_duration?: NullableStringFieldUpdateOperationsInput | string | null
    source_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    talking_duration?: NullableStringFieldUpdateOperationsInput | string | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    segment_id?: IntFieldUpdateOperationsInput | number
  }

  export type PbxCdrUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    call_id?: IntFieldUpdateOperationsInput | number
    answered?: BoolFieldUpdateOperationsInput | boolean
    destination_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    ringing_duration?: NullableStringFieldUpdateOperationsInput | string | null
    source_caller_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    talking_duration?: NullableStringFieldUpdateOperationsInput | string | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    segment_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PbxCdrCountOrderByAggregateInput = {
    id?: SortOrder
    call_id?: SortOrder
    answered?: SortOrder
    destination_caller_id?: SortOrder
    ringing_duration?: SortOrder
    source_caller_id?: SortOrder
    start_time?: SortOrder
    talking_duration?: SortOrder
    recording_url?: SortOrder
    segment_id?: SortOrder
  }

  export type PbxCdrAvgOrderByAggregateInput = {
    id?: SortOrder
    call_id?: SortOrder
    segment_id?: SortOrder
  }

  export type PbxCdrMaxOrderByAggregateInput = {
    id?: SortOrder
    call_id?: SortOrder
    answered?: SortOrder
    destination_caller_id?: SortOrder
    ringing_duration?: SortOrder
    source_caller_id?: SortOrder
    start_time?: SortOrder
    talking_duration?: SortOrder
    recording_url?: SortOrder
    segment_id?: SortOrder
  }

  export type PbxCdrMinOrderByAggregateInput = {
    id?: SortOrder
    call_id?: SortOrder
    answered?: SortOrder
    destination_caller_id?: SortOrder
    ringing_duration?: SortOrder
    source_caller_id?: SortOrder
    start_time?: SortOrder
    talking_duration?: SortOrder
    recording_url?: SortOrder
    segment_id?: SortOrder
  }

  export type PbxCdrSumOrderByAggregateInput = {
    id?: SortOrder
    call_id?: SortOrder
    segment_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PbxCdrDefaultArgs instead
     */
    export type PbxCdrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PbxCdrDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}