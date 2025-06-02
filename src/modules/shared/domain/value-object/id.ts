export class Id {
  static generate(): string {
    return crypto.randomUUID();
  }
}
