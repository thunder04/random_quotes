pkgname='random_quotes'
pkgver=1.0
pkgrel=1
pkgdesc="Random quotes in /etc/issues"
arch=("x86_64" "arm")

package() {
	mkdir -p ${pkgdir}/usr/bin
	mkdir -p ${pkgdir}/etc/systemd/system

	cp ${srcdir}/random_quote ${pkgdir}/usr/bin/
	cp ${srcdir}/random_quotes.service ${pkgdir}/etc/systemd/system/

	chmod +x ${pkgdir}/usr/bin/random_quote

}
