export abstract class HashGenerator {
  abstract hash(plainPassword: string): Promise<string>;
}
