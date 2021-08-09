export interface ModelDefinition {
  readonly name: string;
  readonly attributes: AttributeType;
}

export interface Attribute {
  readonly type: AttributeType;
  readonly label: string;
  readonly value?: Value;
}

export enum AttributeType {
  Date = 0,
  Number,
  Enum,
  Boolean,
  Collection,
  Optional,
  Model,
}

export interface Model extends Attribute {
  readonly type: AttributeType.Model;
  readonly attributes: Attribute[];
}

export interface Collection<V extends Value> extends Attribute {
  readonly type: AttributeType.Collection;
  readonly subtype: AttributeType;
  readonly value: V[];
}

export interface Optional<V extends Value> extends Attribute {
  readonly type: AttributeType.Optional;
  readonly subtype: AttributeType;
  readonly value?: V;
}

export type Enum = string;

export type Value = Model | Value[] | Primitive | undefined;

export type Primitive = Enum | Date | Number | boolean;
