---
description: Create your landing page with Gitlanding
---

# 📝 Customising your app

Now, if the previous steps went smoothly, you can start modifying and of adding to the template code as befits your needs ! 🚀

If you wish to import files sush as webm or mp4 files in your project you must declare them as modules. Copy and paste the following example in the `src/react-app-env.d.ts` file.

```
//Replace <webm> with the extension name of your choice
```

```typescript
declare module "*.webm" {
	const _default: string;
	export default _default;
}
```

{% hint style="success" %}
Host your assets by placing them [in a dedicated directory in your `src` folder](https://github.com/thieryw/test-gl-template/tree/b076e2e75d80da9dc832e1f2519636f6ebde450f/src/assets/img). An then [importing them as URLs directly in your code](https://github.com/thieryw/test-gl-template/blob/b076e2e75d80da9dc832e1f2519636f6ebde450f/src/pages/Home.tsx#L8-L14).
{% endhint %}

{% hint style="info" %}
You can preview the components in [Storybook](https://www.gitlanding.dev/storybook)
{% endhint %}

####
