import uniosNeedsKeyring from './unios-needs-keyring.json';



const KEYRING_PACKAGES = new Set(uniosNeedsKeyring.packages);

export function needsKeyring(pkg: string): boolean {
    const cleanPkg = pkg.trim().toLowerCase();

    if (KEYRING_PACKAGES.has(cleanPkg)) return true;

    for (const needKeyringPkg of Array.from(KEYRING_PACKAGES)) {
        if (cleanPkg.includes(needKeyringPkg)) return true;
    }

    return false;
}
