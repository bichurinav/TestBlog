<script lang="ts" setup></script>

<template lang="pug">
mixin socialLink(src, alt, href="#")
  a(class="social__link" href=href target="_blank" rel="nofollow")
    img(
      class="social__image"
      src=src
      alt=alt
    )

footer.footer
  .container
    .footer-main
      .footer-description
        Logotype()
        p.footer-description__desc.
          Cтатьи о дизайне и искусстве, которые исследуют творческие
          вдохновения и актуальные тенденции, раскрывая мир эстетики и
          креативности

      .footer-contacts
        .footer-contacts__email.email-field
          span.email-field__label email
          a(class="email-field__link"
            href="mailto:testblogsupport@gmail.com"
          ).
            testblogsupport@gmail.com
      
        .footer-contacts__social.social
          +socialLink("/img/social/facebook.svg", "facebook TestBlog")
          +socialLink("/img/social/vk.svg", "vkontakte TestBlog")
          +socialLink("/img/social/instagram.svg", "instagram TestBlog")
          +socialLink("/img/social/tg.svg", "telegram TestBlog")
    
    SubscribeFormBlock(class="footer__subscribe")
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid $gray;
  padding-top: 50px;

  @media (max-width: 1339px) {
    padding-top: 40px;
  }

  &-main {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;
  }

  &-description {
    &__desc {
      margin-top: 20px;
      max-width: 426px;
      line-height: 20px;
      font-size: 14px;
      color: $gray;
    }
  }

  &-contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__email {
      display: flex;
      flex-direction: column;
    }

    &__social {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }

  // email
  .email-field {
    &__label {
      font-size: 14px;
      line-height: 20px;
      color: $gray;
    }

    &__link {
      font-family: "Ubuntu", sans-serif;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
      color: $primary;
      transition: opacity 0.2 ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__subscribe {
    margin-top: 70px;

    @media (max-width: 1339px) {
      margin-top: 40px;
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
}
</style>
