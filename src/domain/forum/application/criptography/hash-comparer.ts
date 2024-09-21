export abstract class HashComparer {
  abstract compare(plainPassword: string, hash: string): Promise<boolean>;
}
