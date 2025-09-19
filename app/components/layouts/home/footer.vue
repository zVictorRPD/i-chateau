<template>
  <footer class="text-white">
    <div class="bg-footer">
      <UContainer class="py-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 py-6">
          <div class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-col gap-0.5">
              <h3 class="font-semibold text-lg">Navegação</h3>
              <div class="w-8 h-0.5 border-b border-white"></div>
            </div>
            <ul class="flex flex-col gap-3">
              <li>
                <ULink to="/properties" class="hover:underline">
                  Imóveis
                </ULink>
              </li>
              <li>
                <ULink to="/blog" class="hover:underline"> Blog </ULink>
              </li>
              <li>
                <ULink to="/contact" class="hover:underline">
                  Contato
                </ULink>
              </li>
              <li>
                <ULink to="/about-us" class="hover:underline">
                  Sobre nós
                </ULink>
              </li>
              <li>
                <ULink to="/privacy" class="hover:underline">
                  Política de Privacidade
                </ULink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-col gap-0.5">
              <h3 class="font-semibold text-lg">Endereço</h3>
              <div class="w-8 h-0.5 border-b border-white"></div>
            </div>
            <ul class="flex flex-col gap-3">
              <li>CEP: 12345-678</li>
              <li>Teresópolis - Rio de Janeiro</li>
              <li>Rua Exemplo, 123 - Bonsucesso</li>
            </ul>
          </div>
          <div class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-col gap-0.5">
              <h3 class="font-semibold text-lg">Contato</h3>
              <div class="w-8 h-0.5 border-b border-white"></div>
            </div>
            <ul class="flex gap-3">
              <li>
                <ULink
                  href="https://wa.me/+5521983277386"
                  target="_blank"
                  external
                >
                  <UIcon
                    name="i-lucide-phone"
                    class="inline-block mr-2"
                    size="24"
                  />
                </ULink>
              </li>
              <li>
                <ULink href="https://facebook.com" target="_blank" external>
                  <UIcon
                    name="i-lucide-facebook"
                    class="inline-block mr-2"
                    size="24"
                  />
                </ULink>
              </li>
              <li>
                <ULink href="https://instagram.com" target="_blank" external>
                  <UIcon
                    name="i-lucide-instagram"
                    class="inline-block mr-2"
                    size="24"
                  />
                </ULink>
              </li>
              <li>
                <ULink href="https://youtube.com" target="_blank" external>
                  <UIcon
                    name="i-lucide-youtube"
                    class="inline-block mr-2"
                    size="24"
                  />
                </ULink>
              </li>
              <li>
                <ULink
                  href="mailto:teste@teste.com"
                  target="_blank"
                  external
                >
                  <UIcon
                    name="i-lucide-mail"
                    class="inline-block mr-2"
                    size="24"
                  />
                </ULink>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </div>
    <div class="bg-black">
      <UContainer class="py-4 text-center">
        <p class="text-sm">
          &copy; 2025 iChateau. Todos os direitos reservados.
        </p>
      </UContainer>
    </div>
  </footer>
</template>
