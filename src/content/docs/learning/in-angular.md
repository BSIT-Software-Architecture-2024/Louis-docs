---
title: In Angular
description: A personal story of my first experience with Angular
---


## The Excitement Phase

As a Laravel developer, I was thrilled to dive into Angular for my Student Portal project. The familiar feeling of using CLI commands, just like in Laravel's artisan, made me feel right at home. Creating components was a breeze - it reminded me of how I generate controllers and models in Laravel.

## The Design Victory

I managed to create some impressive UI designs and pages. The component-based architecture of Angular allowed me to build modular, reusable pieces - something that felt both familiar and new coming from Laravel's blade templates.

## The Overwhelm Sets In

But then came the file explosion. Oh boy.

Every time I ran a simple generate command, Angular would create:
- component.ts (The TypeScript logic file)
- component.html (The template file)
- component.css (The styling file)
- component.spec.ts (The testing file)

Coming from Laravel's more consolidated approach, this felt like information overload. Each component living in four separate files made my project structure look like a complex maze.

## The TypeScript Tribulation

The real challenge wasn't just the number of files - it was TypeScript. As someone used to Laravel's more forgiving PHP environment, TypeScript's strict typing system felt like learning a new language within a language. When errors occurred, they seemed to speak a different dialect:

```typescript
Type 'string' is not assignable to type 'Student'
Property 'id' is missing in type '{}' but required in type 'User'
```

These cryptic messages sent me down rabbit holes of debugging, quite different from Laravel's straightforward error messages.

## The Unfinished Symphony

In the end, while I had a beautifully designed frontend, the authentication functionality remained unimplemented. The combination of multiple files per component and TypeScript's learning curve proved to be more than I could handle in my initial Angular adventure.

## Lessons Learned

1. The transition from Laravel to Angular isn't just about learning a new framework - it's about adapting to a different development philosophy
2. TypeScript requires a mental shift in how we think about data types
3. Project organization in Angular is more granular and requires a different approach to file management

## Moving Forward

While my first Angular project didn't reach completion, it taught me valuable lessons about modern frontend development. The experience has shown me that mastering a new framework isn't just about learning syntax - it's about embracing a different way of thinking about code architecture.

Maybe next time, I'll start with a smaller project, or spend more time understanding TypeScript before diving into Angular. After all, every unfinished project is just a stepping stone to future success!

_Note to self: Maybe I should create a cheat sheet mapping Laravel concepts to Angular equivalents. That might help other Laravel developers making the same journey!_
